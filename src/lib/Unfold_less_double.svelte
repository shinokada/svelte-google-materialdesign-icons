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

  export let ariaLabel = 'unfold less double';
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
    <path d="M16.58 1.41 15.16 0l-3.17 3.17L8.82 0 7.41 1.41 11.99 6z" /><path
      d="M16.58 6.41 15.16 5l-3.17 3.17L8.82 5 7.41 6.41 11.99 11zM7.42 17.59 8.84 19l3.17-3.17L15.18 19l1.41-1.41L12.01 13z"
    /><path d="M7.42 22.59 8.84 24l3.17-3.17L15.18 24l1.41-1.41L12.01 18z" />
  {:else if variation === 'filled'}
    <path d="M16.58 1.41 15.16 0l-3.17 3.17L8.82 0 7.41 1.41 11.99 6z" /><path
      d="M16.58 6.41 15.16 5l-3.17 3.17L8.82 5 7.41 6.41 11.99 11zM7.42 17.59 8.84 19l3.17-3.17L15.18 19l1.41-1.41L12.01 13z"
    /><path d="M7.42 22.59 8.84 24l3.17-3.17L15.18 24l1.41-1.41L12.01 18z" />
  {:else if variation === 'round'}
    <path
      d="m14.46 5.7-2.47 2.46L9.53 5.7a.996.996 0 1 0-1.41 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.18a.996.996 0 1 0-1.41-1.41z"
    /><path
      d="m14.46.7-2.47 2.46L9.53.7a.996.996 0 1 0-1.41 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.18A.996.996 0 1 0 14.46.7zM9.54 23.3l2.47-2.46 2.46 2.46a.996.996 0 1 0 1.41-1.41l-3.17-3.18a.996.996 0 0 0-1.41 0l-3.17 3.18a.996.996 0 1 0 1.41 1.41z"
    /><path
      d="m9.54 18.29 2.47-2.45 2.46 2.46a.996.996 0 1 0 1.41-1.41l-3.17-3.18a.996.996 0 0 0-1.41 0l-3.17 3.17a.996.996 0 1 0 1.41 1.41z"
    />
  {:else if variation === 'sharp'}
    <path d="M16.58 1.41 15.16 0l-3.17 3.17L8.82 0 7.41 1.41 11.99 6z" /><path
      d="M16.58 6.41 15.16 5l-3.17 3.17L8.82 5 7.41 6.41 11.99 11zM7.42 17.59 8.84 19l3.17-3.17L15.18 19l1.41-1.41L12.01 13z"
    /><path d="M7.42 22.59 8.84 24l3.17-3.17L15.18 24l1.41-1.41L12.01 18z" />
  {:else if variation === 'two-tone'}
    <path d="M16.58 1.41 15.16 0l-3.17 3.17L8.82 0 7.41 1.41 11.99 6z" /><path
      d="M16.58 6.41 15.16 5l-3.17 3.17L8.82 5 7.41 6.41 11.99 11zM7.42 17.59 8.84 19l3.17-3.17L15.18 19l1.41-1.41L12.01 13z"
    /><path d="M7.42 22.59 8.84 24l3.17-3.17L15.18 24l1.41-1.41L12.01 18z" />
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
@prop export let ariaLabel = 'unfold less double';
-->
