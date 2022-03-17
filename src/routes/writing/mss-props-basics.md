---
title: Props Basics
date: '2022-03-14'
categories:
	- 'svelte'
---

This is the first in a series of articles dealing with Svelte's foundational principles. Each 'Making Svelte Stick' piece will address one aspect of the tool, offering simple examples of how that aspect works, and when it might be used. While it's undoubtedly useful to follow tutorials that build bigger apps, this approach takes a different path (while hopefully still being useful!) — we're building _micro_ apps, and thoroughly cementing our understanding of everything that's happening in our small codebase. This works for me, and I hope it works for you, too.

This article looks at one of Svelte's most essential building blocks: **props**. It's unlikely you'll see many Svelte apps that don't use props, so understanding what they are, and when and how to use them, is essential. Let's get started.

## What are props?

'Props', short for 'properties', are used to pass data from one Svelte component to another, informing what we see in the DOM. This simple concept, of being able to pass data around, is at the heart of much that is built with Svelte. Note that props are passed in a 'top-down' manner, from parent to child; this concept will become clearer as we go on.

Components which can't receive data may still be useful (components don't _need_ props, after all), but they'll be static and, consequently, inflexible. For example, we could have an `App.svelte` like this:

```javascript
<script>
  import Button from './Button.svelte';
</script>

<Button />
```

... and a button component, `Button.svelte`, like this:

```javascript
<button>Open</button>
```

In this example, the button's content is hard-coded: it will always say 'Open'. That might be enough for our needs — we might need a number of 'Open' buttons throughout our site — but, with just a little more code, we can make that single component useful in many more situations. One of the great things about components, after all, is that we can build them once and use them again and again, in different places and with dynamic, context-specific content.

## Using props

So, let's pass a prop to our button component, then we'll break down what's happening. Begin by changing `Button.svelte`...

```javascript
<script>
	export let buttonText;
</script>

<button>
	{buttonText}
</button>
```

... then adjust `App.svelte`:

```javascript
<script>
  import Button from './Button.svelte';
</script>

<Button buttonText = "Open" />
```

Although our button looks the same, our button component is now much more flexible... but how?

## The `export` syntax in Svelte

Note line 2 in `Button.svelte`, reading `export let buttonText`. This syntax can be a source of some confusion — surely we're _importing_ a value here, to be used within our `button` element? Well... no. Svelte's using ES6's `export` syntax, and marking the variable declaration (in our example, `let buttonText`) as being available to parent components. We might better think of `export let buttonText` as meaning, "_Expose_ this variable to the outside, and make it available for use by others." Essentially, the parent-child relationship (with props passed from parent to child) sees the child hand over, or export, control of the prop to the parent.

As an aside, we might wonder why a more straightforwardly meaningful syntax wasn't adopted. Why not `expose let buttonText`, for example, or `prop let buttonText`? The simple answer is that, because Svelte is compiled to JavaScript, we must write syntactically correct JavaScript in the first instance, which neither of those two suggestions are.

## Passing the prop

Next, note what's happening in `App.svelte`. Where we had previously declared a static `<Button />`, we're now passing a prop: `<Button buttonText = "Open" />`. This is where we set the button's content, with the prop value passed from `App.svelte` (the parent) to `Button.svelte` (the child).

## Default values

We can easily pass a default value to our prop, ensuring that there's no error if an expected prop is missing for some reason. Let's open `Button.svelte` and assign a default value of "Closed" to `buttonText`...

```javascript
<script>
	export let buttonText = "Closed";
</script>

<button>
	{buttonText}
</button>
```

... and let's adjust `App.svelte` slightly, removing the value we passed previously:

```javascript
<script>
  import Button from './Button.svelte';
</script>

<Button />
```

The button's text now reads, "Closed". Not passing a prop value at the point of invoking the component has caused its prop to revert to default.

## Spreading props

What if we wanted to pass more than one prop to our button component? We could do it by rewriting `Button.svelte` like this...

```javascript
<script>
	export let buttonText = "Closed";
	export let buttonBgColour;
</script>

<button style="background-color: {buttonBgColour};">
	{buttonText}
</button>
```

... and `App.svelte` like this:

```javascript
<script>
  import Button from './Button.svelte';
</script>

<Button buttonBgColour="skyblue" />
```

Our default content is still in place, but we've added some inline styling through a second prop, `buttonBgColour`.

However, where we have multiple props, it can be useful to package them in an object and pass them via JavaScript's spread syntax. To do this, we'd rewrite `App.svelte` like so:

```javascript
<script>
  import Button from './Button.svelte';

	const buttonData = {
		buttonText: 'Closed',
		buttonBgColour: 'skyblue',
	}
</script>

<Button {...buttonData} />
```

Where a key's value is `undefined`, the default value (if it exists) will be used. So, the following would also produce a sky blue 'Closed' button:

```javascript
<script>
  import Button from './Button.svelte';

	const buttonData = {
		buttonText: undefined,
		buttonBgColour: 'skyblue',
	}
</script>

<Button {...buttonData} />
```

## Conclusion

That's all you need to know to start using props in Svelte. We've looked at the syntax required to export a prop, and the syntax required to pass values to a prop. We've learned how to establish default values, and how to bundle props into an object and pass them using spread syntax.
