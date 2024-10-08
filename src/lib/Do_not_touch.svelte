<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone';
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};

  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';

  export let ariaLabel = 'do not touch';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  {#if variation === 'outlined'}
    <path
      d="M2.81 2.81 1.39 4.22 7 9.83v4.3l-2.6-1.48c-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26L2 13.88l6.8 7.18c.57.6 1.35.94 2.18.94H17c.62 0 1.18-.19 1.66-.52l1.12 1.12 1.41-1.41L2.81 2.81zM17 20h-6c-.39 0-.64-.23-.75-.36L6.87 16H9v-4.17l8.14 8.14c-.05.01-.09.03-.14.03zm-3.17-9H14V3.25a1.25 1.25 0 0 1 2.5 0V11h1V5.25a1.25 1.25 0 0 1 2.5 0v11.92l-2-2V13h-2.17l-2-2zm-.83-.83V2.25a1.25 1.25 0 0 0-2.5 0v5.42l2.5 2.5zm-3.5-3.5V4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67z"
    />
  {:else if variation === 'filled'}
    <path
      d="m13 10.17-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0v7.92zm7 2.58v-7.5a1.25 1.25 0 0 0-2.5 0V11h-1V3.25a1.25 1.25 0 0 0-2.5 0v7.92l6 6v-4.42zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67V4.25zm3.5 5.92-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0v7.92zm7 2.58v-7.5a1.25 1.25 0 0 0-2.5 0V11h-1V3.25a1.25 1.25 0 0 0-2.5 0v7.92l6 6v-4.42zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67V4.25zm11.69 16.94L2.81 2.81 1.39 4.22l5.63 5.63L7 9.83v4.3c-1.11-.64-2.58-1.47-2.6-1.48-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26-.04.01-1.16 1.11-1.16 1.11l6.8 7.18c.57.6 1.35.94 2.18.94H17c.62 0 1.18-.19 1.65-.52l-.02-.02 1.15 1.15 1.41-1.42z"
    />
  {:else if variation === 'round'}
    <path
      d="m13 10.17-2.5-2.5V2.25a1.25 1.25 0 0 1 2.5 0v7.92zm7-4.85c0-.65-.47-1.25-1.12-1.32-.75-.08-1.38.51-1.38 1.24v5.25c0 .28-.22.5-.5.5s-.5-.22-.5-.5V3.31c0-.65-.47-1.25-1.12-1.32-.75-.06-1.38.53-1.38 1.26v7.92l6 6V5.32zM9.5 4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67V4.25zM17 22c.62 0 1.18-.19 1.65-.52l-.02-.02.44.44a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92l4.92 4.92L7 9.83v4.3l-2.6-1.48c-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26L2 13.88l6.8 7.18c.57.6 1.35.94 2.18.94H17z"
    />
  {:else if variation === 'sharp'}
    <path
      d="m13 10.17-2.5-2.5V1H13v9.17zM20 4h-2.5v7h-1V2H14v9.17l6 6V4zM9.5 3H7.01v1.18L9.5 6.67V3zm11.69 18.19L2.81 2.81 1.39 4.22 7 9.83v4.3l-3.32-1.9L2 13.88 9.68 22h9.54l.56.61 1.41-1.42z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M18 15.17V13h-2.17L18 15.17zm-9-3.34 8.14 8.14c-.05.01-.09.03-.14.03h-6c-.39 0-.64-.23-.75-.36L6.87 16H9v-4.17z"
      opacity=".3"
    /><path
      d="M2.81 2.81 1.39 4.22 7 9.83v4.3l-2.6-1.48c-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26L2 13.88l6.8 7.18c.57.6 1.35.94 2.18.94H17c.62 0 1.18-.19 1.66-.52l1.12 1.12 1.41-1.41L2.81 2.81zM17 20h-6c-.39 0-.64-.23-.75-.36L6.87 16H9v-4.17l8.14 8.14c-.05.01-.09.03-.14.03zm-3.17-9H14V3.25a1.25 1.25 0 0 1 2.5 0V11h1V5.25a1.25 1.25 0 0 1 2.5 0v11.92l-2-2V13h-2.17l-2-2zm-.83-.83V2.25a1.25 1.25 0 0 0-2.5 0v5.42l2.5 2.5zm-3.5-3.5V4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67z"
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-google-materialdesign-icons.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';
@prop export let ariaLabel = 'do not touch';
-->
