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

  export let ariaLabel = 'electrical services';
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
      d="M21 14c0-.55-.45-1-1-1h-2v2h2c.55 0 1-.45 1-1zm-1 3h-2v2h2c.55 0 1-.45 1-1s-.45-1-1-1zm-8-3h-2v4h2c0 1.1.9 2 2 2h3v-8h-3c-1.1 0-2 .9-2 2z"
    /><path
      d="M5 13c0-1.1.9-2 2-2h1.5c1.93 0 3.5-1.57 3.5-3.5S10.43 4 8.5 4H5c-.55 0-1 .45-1 1s.45 1 1 1h3.5c.83 0 1.5.67 1.5 1.5S9.33 9 8.5 9H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2H7c-1.1 0-2-.9-2-2z"
    />
  {:else if variation === 'filled'}
    <path
      d="M21 14c0-.55-.45-1-1-1h-2v2h2c.55 0 1-.45 1-1zm-1 3h-2v2h2c.55 0 1-.45 1-1s-.45-1-1-1zm-8-3h-2v4h2c0 1.1.9 2 2 2h3v-8h-3c-1.1 0-2 .9-2 2z"
    /><path
      d="M5 13c0-1.1.9-2 2-2h1.5c1.93 0 3.5-1.57 3.5-3.5S10.43 4 8.5 4H5c-.55 0-1 .45-1 1s.45 1 1 1h3.5c.83 0 1.5.67 1.5 1.5S9.33 9 8.5 9H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2H7c-1.1 0-2-.9-2-2z"
    />
  {:else if variation === 'round'}
    <path
      d="M21 14c0-.55-.45-1-1-1h-2v2h2c.55 0 1-.45 1-1zm-1 3h-2v2h2c.55 0 1-.45 1-1s-.45-1-1-1zm-4-5h-2c-1.1 0-2 .9-2 2h-1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1c0 1.1.9 2 2 2h2c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM5 13c0-1.1.9-2 2-2h1.5c1.93 0 3.5-1.57 3.5-3.5S10.43 4 8.5 4H5c-.55 0-1 .45-1 1s.45 1 1 1h3.5c.83 0 1.5.67 1.5 1.5S9.33 9 8.5 9H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2H7c-1.1 0-2-.9-2-2z"
    />
  {:else if variation === 'sharp'}
    <path d="M18 13h3v2h-3zm-6-1v2h-2v4h2v2h5v-8z" /><path
      d="M5 11h7V4H4v2h6v3H3v8h6v-2H5zm13 6h3v2h-3z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M20 15h-2v-2h2c.55 0 1 .45 1 1s-.45 1-1 1zm0 4h-2v-2h2c.55 0 1 .45 1 1s-.45 1-1 1zm-6-7c-1.1 0-2 .9-2 2h-2v4h2c0 1.1.9 2 2 2h3v-8h-3z"
    /><path
      d="M4 5c0 .55.45 1 1 1h3.5c.83 0 1.5.67 1.5 1.5S9.33 9 8.5 9H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2H7c-1.1 0-2-.9-2-2s.9-2 2-2h1.5c1.93 0 3.5-1.57 3.5-3.5S10.43 4 8.5 4H5c-.55 0-1 .45-1 1z"
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
@prop export let ariaLabel = 'electrical services';
-->
