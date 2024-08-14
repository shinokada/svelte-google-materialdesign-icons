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

  export let ariaLabel = 'adf scanner';
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
      d="M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3zM8 6h8v6H8V6zm12 12H4v-3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v3z"
    /><circle cx="18" cy="16" r="1" />
  {:else if variation === 'filled'}
    <path
      d="M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3zm-3 0H8V6h8v6zm2 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  {:else if variation === 'round'}
    <path
      d="M19 12h-1V6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v6H5c-1.66 0-3 1.34-3 3v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3c0-1.66-1.34-3-3-3zm-3 0H8V6h8v6zm2 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M22 12h-4V4H6v8H2v8h20v-8zm-6 0H8V6h8v6zm2 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M8 6h8v6H8zm11 8H5c-.55 0-1 .45-1 1v3h16v-3c0-.55-.45-1-1-1zm-1 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
      opacity=".3"
    /><path
      d="M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3zM8 6h8v6H8V6zm12 12H4v-3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v3z"
    /><circle cx="18" cy="16" r="1" />
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
@prop export let ariaLabel = 'adf scanner';
-->
