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

  export let ariaLabel = 'keyboard double arrow down';
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
    <path d="M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z" /><path
      d="m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"
    />
  {:else if variation === 'filled'}
    <path d="M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z" /><path
      d="m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"
    />
  {:else if variation === 'round'}
    <path
      d="M17.29 5.71a.996.996 0 0 0-1.41 0L12 9.58 8.11 5.7A.996.996 0 1 0 6.7 7.11l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.984.984 0 0 0 0-1.4z"
    /><path
      d="M17.29 12.3a.996.996 0 0 0-1.41 0L12 16.17l-3.88-3.88a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.993.993 0 0 0-.01-1.4z"
    />
  {:else if variation === 'sharp'}
    <path d="M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z" /><path
      d="m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"
    />
  {:else if variation === 'two-tone'}
    <path d="M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z" /><path
      d="m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"
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
@prop export let ariaLabel = 'keyboard double arrow down';
-->
