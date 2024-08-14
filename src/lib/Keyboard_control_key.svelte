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

export let ariaLabel="keyboard control key";
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
    <path d="m5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z"/>
  {:else if variation === 'filled'}
    <path d="m5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z"/>
  {:else if variation === 'round'}
    <path d="M5.71 12.71c.39.39 1.02.39 1.41 0L12 7.83l4.88 4.88a.996.996 0 1 0 1.41-1.41L12.7 5.71a.996.996 0 0 0-1.41 0L5.7 11.3c-.38.38-.38 1.02.01 1.41z"/>
  {:else if variation === 'sharp'}
    <path d="m5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z"/>
  {:else if variation === 'two-tone'}
    <path d="m5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z"/>
  {/if}
</svg>