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

  export let ariaLabel = 'disabled visible';
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
      d="M17 15c1.95 0 3.76.98 4.75 2.5-.99 1.52-2.8 2.5-4.75 2.5s-3.76-.98-4.75-2.5c.99-1.52 2.8-2.5 4.75-2.5zm0-2c-3.18 0-5.9 1.87-7 4.5 1.1 2.63 3.82 4.5 7 4.5s5.9-1.87 7-4.5c-1.1-2.63-3.82-4.5-7-4.5zm0 6c-.83 0-1.5-.67-1.5-1.5S16.17 16 17 16s1.5.67 1.5 1.5S17.83 19 17 19zm4.99-6.66c.01-.11.01-.23.01-.34 0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.17 3.93 9.43 8.96 9.95a9.343 9.343 0 0 1-2.32-2.68A8.01 8.01 0 0 1 4 12c0-1.85.63-3.55 1.69-4.9l5.66 5.66c.56-.4 1.17-.73 1.82-1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.24 0 7.7 3.29 7.98 7.45.71.22 1.39.52 2.01.89z"
    />
  {:else if variation === 'filled'}
    <path
      d="M21.99 12.34c.01-.11.01-.23.01-.34 0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.17 3.93 9.43 8.96 9.95a9.343 9.343 0 0 1-2.32-2.68A8.01 8.01 0 0 1 4 12c0-1.85.63-3.55 1.69-4.9l5.66 5.66c.56-.4 1.17-.73 1.82-1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.24 0 7.7 3.29 7.98 7.45.71.22 1.39.52 2.01.89zM17 13c-3.18 0-5.9 1.87-7 4.5 1.1 2.63 3.82 4.5 7 4.5s5.9-1.87 7-4.5c-1.1-2.63-3.82-4.5-7-4.5zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zm1.5-2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"
    />
  {:else if variation === 'round'}
    <path
      d="M21.99 12.34c.01-.11.01-.23.01-.34 0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.17 3.93 9.43 8.96 9.95a9.343 9.343 0 0 1-2.32-2.68A8.01 8.01 0 0 1 4 12c0-1.85.63-3.55 1.69-4.9l5.66 5.66c.56-.4 1.17-.73 1.82-1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.24 0 7.7 3.29 7.98 7.45.71.22 1.39.52 2.01.89zM17 13c-3.18 0-5.9 1.87-7 4.5 1.1 2.63 3.82 4.5 7 4.5s5.9-1.87 7-4.5c-1.1-2.63-3.82-4.5-7-4.5zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zm1.5-2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M21.99 12.34c.01-.11.01-.23.01-.34 0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.17 3.93 9.43 8.96 9.95a9.343 9.343 0 0 1-2.32-2.68A8.01 8.01 0 0 1 4 12c0-1.85.63-3.55 1.69-4.9l5.66 5.66c.56-.4 1.17-.73 1.82-1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.24 0 7.7 3.29 7.98 7.45.71.22 1.39.52 2.01.89zM17 13c-3.18 0-5.9 1.87-7 4.5 1.1 2.63 3.82 4.5 7 4.5s5.9-1.87 7-4.5c-1.1-2.63-3.82-4.5-7-4.5zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zm1.5-2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M17 15c-1.95 0-3.76.98-4.75 2.5.99 1.52 2.8 2.5 4.75 2.5s3.76-.98 4.75-2.5c-.99-1.52-2.8-2.5-4.75-2.5zm0 4c-.83 0-1.5-.67-1.5-1.5S16.17 16 17 16s1.5.67 1.5 1.5S17.83 19 17 19z"
      opacity=".3"
    /><path
      d="M17 15c1.95 0 3.76.98 4.75 2.5-.99 1.52-2.8 2.5-4.75 2.5s-3.76-.98-4.75-2.5c.99-1.52 2.8-2.5 4.75-2.5zm0-2c-3.18 0-5.9 1.87-7 4.5 1.1 2.63 3.82 4.5 7 4.5s5.9-1.87 7-4.5c-1.1-2.63-3.82-4.5-7-4.5zm0 6c-.83 0-1.5-.67-1.5-1.5S16.17 16 17 16s1.5.67 1.5 1.5S17.83 19 17 19zm4.99-6.66c.01-.11.01-.23.01-.34 0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.17 3.93 9.43 8.96 9.95a9.343 9.343 0 0 1-2.32-2.68A8.01 8.01 0 0 1 4 12c0-1.85.63-3.55 1.69-4.9l5.66 5.66c.56-.4 1.17-.73 1.82-1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.24 0 7.7 3.29 7.98 7.45.71.22 1.39.52 2.01.89z"
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
@prop export let ariaLabel = 'disabled visible';
-->
