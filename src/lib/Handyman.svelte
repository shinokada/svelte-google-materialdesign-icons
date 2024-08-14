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

  export let ariaLabel = 'handyman';
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
      d="m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12a.996.996 0 0 0 0-1.41zm-2.83 1.42-4.24-4.24.71-.71 4.24 4.24-.71.71z"
    /><path
      d="m17.34 10.19 1.41-1.41 2.12 2.12a3 3 0 0 0 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3a.996.996 0 0 0 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15 1.06 1.05zm-7.98 5.15-4.24 4.24-.71-.71 4.24-4.24.71.71z"
    />
  {:else if variation === 'filled'}
    <path
      d="m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12a.996.996 0 0 0 0-1.41z"
    /><path
      d="m17.34 10.19 1.41-1.41 2.12 2.12a3 3 0 0 0 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3a.996.996 0 0 0 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15 1.06 1.05z"
    />
  {:else if variation === 'round'}
    <path
      d="m21.67 18.17-4.72-4.72c-.48-.48-.99-.59-1.58-.59l-2.54 2.54c0 .59.11 1.11.59 1.58l4.72 4.72c.39.39 1.02.39 1.41 0l2.12-2.12a.996.996 0 0 0 0-1.41z"
    /><path
      d="M16.63 9.49c.39.39 1.02.39 1.41 0l.71-.71 2.12 2.12a3 3 0 0 0 0-4.24l-2.83-2.83a.996.996 0 0 0-1.41 0l-.71.71V2c0-.62-.76-.95-1.21-.5l-2.54 2.54c-.45.45-.12 1.21.5 1.21h2.54l-.71.71a.996.996 0 0 0 0 1.41l.35.35-2.89 2.89-4.11-4.13v-1c0-.27-.11-.52-.29-.71L5.54 2.74a.996.996 0 0 0-1.41 0L2.71 4.16a.996.996 0 0 0 0 1.41L4.73 7.6c.19.19.44.29.71.29h1l4.13 4.13-.85.85h-1.3c-.53 0-1.04.21-1.41.59l-4.72 4.72a.996.996 0 0 0 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l4.72-4.72c.38-.38.59-.88.59-1.41v-1.29l5.15-5.15.35.35z"
    />
  {:else if variation === 'sharp'}
    <path d="M16.37 12.87h-.99l-2.54 2.54v.99l6.01 6.01 3.54-3.54-6.02-6z" /><path
      d="m17.34 10.19 1.41-1.41 2.12 2.12a3 3 0 0 0 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-6.01 6.01 3.54 3.54 6.01-6.01V14.3l5.15-5.15 1.05 1.04z"
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
@prop export let ariaLabel = 'handyman';
-->
