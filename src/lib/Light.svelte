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

  export let ariaLabel = 'light';
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
      d="M13 6.06V3h-2v3.06c-4.5.5-8 4.31-8 8.93C3 16.1 3.9 17 5.01 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h2.99c1.11 0 2.01-.9 2.01-2.01 0-4.62-3.5-8.43-8-8.93zM12 19c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm0-4H5c0-3.86 3.14-7 7-7s7 3.14 7 7h-7z"
    />
  {:else if variation === 'filled'}
    <path
      d="M13 6.06V3h-2v3.06c-4.5.5-8 4.31-8 8.93C3 16.1 3.9 17 5.01 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h2.99c1.11 0 2.01-.9 2.01-2.01 0-4.62-3.5-8.43-8-8.93zM12 15H5c0-3.86 3.14-7 7-7s7 3.14 7 7h-7z"
    />
  {:else if variation === 'round'}
    <path
      d="M13 6.06V4c0-.55-.45-1-1-1s-1 .45-1 1v2.06c-4.5.5-8 4.31-8 8.93C3 16.1 3.9 17 5.01 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h2.99c1.11 0 2.01-.9 2.01-2.01 0-4.62-3.5-8.43-8-8.93zM12 15H5c0-3.86 3.14-7 7-7s7 3.14 7 7h-7z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M13 6.06V3h-2v3.06A9.006 9.006 0 0 0 3.22 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h4.78A9.006 9.006 0 0 0 13 6.06zM12 15H5c0-3.86 3.14-7 7-7s7 3.14 7 7h-7z"
    />
  {:else if variation === 'two-tone'}
    <path d="M10 17c0 1.1.9 2 2 2s2-.9 2-2h-4z" opacity=".3" /><path
      d="M13 6.06V3h-2v3.06c-4.5.5-8 4.31-8 8.93C3 16.1 3.9 17 5.01 17H8c0 2.21 1.79 4 4 4s4-1.79 4-4h2.99c1.11 0 2.01-.9 2.01-2.01 0-4.62-3.5-8.43-8-8.93zM12 19c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm0-4H5c0-3.86 3.14-7 7-7s7 3.14 7 7h-7z"
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
@prop export let ariaLabel = 'light';
-->
