<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: "filled" | "outlined" | "round" | "sharp" | "two-tone";
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};

  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = ctx.variation || "outlined";

export let ariaLabel="keyboard double arrow right";
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
    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"/><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/>
  {:else if variation === 'filled'}
    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"/><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/>
  {:else if variation === 'round'}
    <path d="M5.7 6.71a.996.996 0 0 0 0 1.41L9.58 12 5.7 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L7.12 6.71c-.39-.39-1.03-.39-1.42 0z"/><path d="M12.29 6.71a.996.996 0 0 0 0 1.41L16.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
  {:else if variation === 'sharp'}
    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"/><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/>
  {:else if variation === 'two-tone'}
    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"/><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/>
  {/if}
</svg>