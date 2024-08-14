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

  export let ariaLabel = 'numbers';
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
      d="m20.5 10 .5-2h-4l1-4h-2l-1 4h-4l1-4h-2L9 8H5l-.5 2h4l-1 4h-4L3 16h4l-1 4h2l1-4h4l-1 4h2l1-4h4l.5-2h-4l1-4h4zm-7 4h-4l1-4h4l-1 4z"
    />
  {:else if variation === 'filled'}
    <path
      d="m20.5 10 .5-2h-4l1-4h-2l-1 4h-4l1-4h-2L9 8H5l-.5 2h4l-1 4h-4L3 16h4l-1 4h2l1-4h4l-1 4h2l1-4h4l.5-2h-4l1-4h4zm-7 4h-4l1-4h4l-1 4z"
    />
  {:else if variation === 'round'}
    <path
      d="m20.68 9.27.01-.06A.961.961 0 0 0 19.76 8H17l.7-2.79A.972.972 0 0 0 16.76 4c-.45 0-.83.3-.94.73L15 8h-4l.7-2.79A.972.972 0 0 0 10.76 4c-.45 0-.83.3-.94.73L9 8H5.76c-.45 0-.84.3-.94.73l-.02.06c-.15.62.31 1.21.94 1.21H8.5l-1 4H4.26c-.45 0-.83.3-.94.73l-.02.06c-.15.62.31 1.21.94 1.21H7l-.7 2.79c-.15.62.31 1.21.94 1.21.45 0 .83-.3.94-.73L9 16h4l-.7 2.79c-.15.62.31 1.21.94 1.21.45 0 .83-.3.94-.73L15 16h3.24c.45 0 .83-.3.94-.73l.01-.06a.976.976 0 0 0-.94-1.21H15.5l1-4h3.24c.45 0 .84-.3.94-.73zM13.5 14h-4l1-4h4l-1 4z"
    />
  {:else if variation === 'sharp'}
    <path
      d="m20.5 10 .5-2h-4l1-4h-2l-1 4h-4l1-4h-2L9 8H5l-.5 2h4l-1 4h-4L3 16h4l-1 4h2l1-4h4l-1 4h2l1-4h4l.5-2h-4l1-4h4zm-7 4h-4l1-4h4l-1 4z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="m20.5 10 .5-2h-4l1-4h-2l-1 4h-4l1-4h-2L9 8H5l-.5 2h4l-1 4h-4L3 16h4l-1 4h2l1-4h4l-1 4h2l1-4h4l.5-2h-4l1-4h4zm-7 4h-4l1-4h4l-1 4z"
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
@prop export let ariaLabel = 'numbers';
-->
