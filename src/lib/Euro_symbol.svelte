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

  export let ariaLabel = 'euro symbol';
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
      d="M15 18.5A6.48 6.48 0 0 1 9.24 15H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24A6.491 6.491 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.955 8.955 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06a8.262 8.262 0 0 0 0 2H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"
    />
  {:else if variation === 'filled'}
    <path
      d="M15 18.5A6.48 6.48 0 0 1 9.24 15H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24A6.491 6.491 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.955 8.955 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06a8.262 8.262 0 0 0 0 2H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"
    />
  {:else if variation === 'round'}
    <path
      d="M15 18.5A6.48 6.48 0 0 1 9.24 15H14c.55 0 1-.45 1-1s-.45-1-1-1H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H14c.55 0 1-.45 1-1s-.45-1-1-1H9.24A6.491 6.491 0 0 1 15 5.5c1.25 0 2.42.36 3.42.97.5.31 1.15.26 1.57-.16.58-.58.45-1.53-.25-1.96A9.034 9.034 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H4c-.55 0-1 .45-1 1s.45 1 1 1h2.06a8.262 8.262 0 0 0 0 2H4c-.55 0-1 .45-1 1s.45 1 1 1h2.52c1.24 3.49 4.56 6 8.48 6 1.74 0 3.36-.49 4.74-1.35.69-.43.82-1.39.24-1.97-.42-.42-1.07-.47-1.57-.15-.99.62-2.15.97-3.41.97z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M15 18.5A6.48 6.48 0 0 1 9.24 15H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24A6.491 6.491 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.955 8.955 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06a8.262 8.262 0 0 0 0 2H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M15 18.5A6.48 6.48 0 0 1 9.24 15H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24A6.491 6.491 0 0 1 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.955 8.955 0 0 0 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06a8.262 8.262 0 0 0 0 2H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"
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
@prop export let ariaLabel = 'euro symbol';
-->
