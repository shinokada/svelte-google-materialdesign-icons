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

  export let ariaLabel = 'home mini';
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
      d="M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7zm0 2c7.64 0 7.99 4.51 8 5H4c0-.2.09-5 8-5zm2.86 10H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3z"
    />
  {:else if variation === 'filled'}
    <path
      d="M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7zm0 2c7.64 0 7.99 4.51 8 5H4c0-.2.09-5 8-5zm2.86 10H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3z"
    />
  {:else if variation === 'round'}
    <path
      d="M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7zm0 2c7.64 0 7.99 4.51 8 5H4c0-.2.09-5 8-5zm2.86 10H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7zm0 2c7.64 0 7.99 4.51 8 5H4c0-.2.09-5 8-5zm2.86 10H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M12 7c-7.91 0-8 4.8-8 5h16c-.01-.49-.36-5-8-5zM9.14 17h5.72c2.1 0 3.92-1.24 4.71-3H4.42c.8 1.76 2.62 3 4.72 3z"
      opacity=".3"
    /><path
      d="M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7zm2.86 12H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3zM4 12c0-.2.09-5 8-5 7.64 0 7.99 4.51 8 5H4z"
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
@prop export let ariaLabel = 'home mini';
-->
