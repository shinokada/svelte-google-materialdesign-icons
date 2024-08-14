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

export let ariaLabel="arrow back ios new";
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
    <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"/>
  {:else if variation === 'filled'}
    <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"/>
  {:else if variation === 'round'}
    <path d="M16.88 2.88a1.25 1.25 0 0 0-1.77 0L6.7 11.29a.996.996 0 0 0 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77z"/>
  {:else if variation === 'sharp'}
    <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"/>
  {:else if variation === 'two-tone'}
    <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"/>
  {/if}
</svg>