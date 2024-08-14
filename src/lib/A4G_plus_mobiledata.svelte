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

  export let ariaLabel = '4g plus mobiledata';
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
      d="M13 11v2h2v2h-4V9h6c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4h-4zm11 0h-2V9h-2v2h-2v2h2v2h2v-2h2v-2zM7 7H5v5H3V7H1v7h4v3h2v-3h1v-2H7V7z"
    />
  {:else if variation === 'filled'}
    <path
      d="M13 11v2h2v2h-4V9h6c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4h-4zm11 0h-2V9h-2v2h-2v2h2v2h2v-2h2v-2zM7 7H5v5H3V7H1v7h4v3h2v-3h1v-2H7V7z"
    />
  {:else if variation === 'round'}
    <path
      d="M16 9c.55 0 1-.45 1-1s-.45-1-1-1h-5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h1v2h-4V9h5zm7 2h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1zM7 12V8c0-.55-.45-1-1-1s-1 .45-1 1v4H3V8c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h3v2c0 .55.45 1 1 1s1-.45 1-1v-2c.55 0 1-.45 1-1s-.45-1-1-1z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M13 11v2h2v2h-4V9h6V7H9v10h8v-6h-4zm11 0h-2V9h-2v2h-2v2h2v2h2v-2h2v-2zM7 7H5v5H3V7H1v7h4v3h2v-3h1v-2H7V7z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M13 11v2h2v2h-4V9h6c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4h-4zm11 0h-2V9h-2v2h-2v2h2v2h2v-2h2v-2zM7 7H5v5H3V7H1v7h4v3h2v-3h1v-2H7V7z"
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
@prop export let ariaLabel = '4g plus mobiledata';
-->
