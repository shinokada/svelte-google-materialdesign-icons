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

  export let ariaLabel = 'swipe down';
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
      d="m20.22 10-4.15.01a.975.975 0 0 0-.45.08l-.59.26-1.83-4.1c-.56-1.26-2.04-1.83-3.3-1.27s-1.83 2.04-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21L8 19.19l6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51zm1.27 7.34L15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66.25-.11.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01 1.36 5.34zM3.8 12.18c-.2-.86-.3-1.76-.3-2.68 0-2.84.99-5.45 2.63-7.5L7.2 3.07a10.457 10.457 0 0 0-1.88 8.99l1.62-1.62L8 11.5 4.5 15 1 11.5l1.06-1.06 1.74 1.74z"
    />
  {:else if variation === 'filled'}
    <path
      d="M3.8 12.18c-.2-.86-.3-1.76-.3-2.68 0-2.84.99-5.45 2.63-7.5L7.2 3.07a10.457 10.457 0 0 0-1.88 8.99l1.62-1.62L8 11.5 4.5 15 1 11.5l1.06-1.06 1.74 1.74zm10.05-.56-2.68-5.37a1.498 1.498 0 0 0-2.01-.67c-.75.38-1.05 1.28-.68 2.02l4.81 9.6-3.24.8c-.33.09-.59.33-.7.66L9 19.78l6.19 2.25c.5.17 1.28.02 1.75-.22l5.51-2.75c.89-.45 1.32-1.48 1-2.42l-1.43-4.27a2 2 0 0 0-1.9-1.37h-4.56c-.31 0-.62.07-.89.21l-.82.41"
    />
  {:else if variation === 'round'}
    <path
      d="M8.83 19.1c-.26-.6.09-1.28.73-1.41l3.58-.71-4.35-9.81c-.34-.76 0-1.64.76-1.98.76-.34 1.64 0 1.98.76l2.43 5.49.84-.37c.28-.13.59-.18.9-.17l4.56.21a2 2 0 0 1 1.83 1.45l1.23 4.33c.27.96-.2 1.97-1.11 2.37l-5.63 2.49c-.48.21-1.26.33-1.76.14l-5.45-2.27a.952.952 0 0 1-.54-.52zM5.59 2.73A11.924 11.924 0 0 0 3.5 9.5c0 .92.1 1.82.3 2.68l-1.19-1.19c-.29-.29-.77-.32-1.07-.04a.76.76 0 0 0-.02 1.08l2.26 2.26c.39.39 1.02.39 1.41 0l2.24-2.24c.29-.29.32-.77.04-1.07a.76.76 0 0 0-1.08-.02L5.3 12.05c-.19-.81-.3-1.67-.3-2.55 0-2.2.68-4.24 1.83-5.93.2-.3.17-.7-.09-.95a.745.745 0 0 0-1.15.11z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M3.8 12.18c-.2-.86-.3-1.76-.3-2.68 0-2.84.99-5.45 2.63-7.5L7.2 3.07a10.457 10.457 0 0 0-1.88 8.99l1.62-1.62L8 11.5 4.5 15 1 11.5l1.06-1.06 1.74 1.74zm17.91-1 2.09 7.39-8.23 3.65-6.84-2.85.61-1.62 3.8-.75-4.35-9.83c-.34-.76 0-1.64.76-1.98.76-.34 1.64 0 1.98.76l2.43 5.49 1.26-.56 6.49.3z"
    />
  {:else if variation === 'two-tone'}
    replace_svg_two
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
@prop export let ariaLabel = 'swipe down';
-->
