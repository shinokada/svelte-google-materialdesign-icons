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

  export let ariaLabel = 'swipe right alt';
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
      d="M13.9 11a5 5 0 1 0 0 2h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11H13.9zM9 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"
    />
  {:else if variation === 'filled'}
    <path d="M13.9 11a5 5 0 1 0 0 2h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11H13.9z" />
  {:else if variation === 'round'}
    <path
      d="M13.9 11a5 5 0 1 0 0 2h4.27l-.88.88a.996.996 0 1 0 1.41 1.41l2.59-2.59a.996.996 0 0 0 0-1.41L18.7 8.7a.996.996 0 1 0-1.41 1.41l.88.89H13.9z"
    />
  {:else if variation === 'sharp'}
    <path d="M13.9 11a5 5 0 1 0 0 2h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11H13.9z" />
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
@prop export let ariaLabel = 'swipe right alt';
-->
