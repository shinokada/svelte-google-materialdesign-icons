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

export let ariaLabel="arrow right alt";
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
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
  {:else if variation === 'filled'}
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/>
  {:else if variation === 'round'}
    <path d="M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V11z"/>
  {:else if variation === 'sharp'}
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
  {:else if variation === 'two-tone'}
    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
  {/if}
</svg>