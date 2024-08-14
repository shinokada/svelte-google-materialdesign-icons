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

export let ariaLabel="signal cellular 0 bar";
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
    <path d="M2 22h20V2L2 22zm18-2H6.83L20 6.83V20z"/>
  {:else if variation === 'filled'}
    <path d="M20 6.83V20H6.83L20 6.83M22 2 2 22h20V2z"/>
  {:else if variation === 'round'}
    <path d="M4.41 22H21c.55 0 1-.45 1-1V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71zM20 20H6.83L20 6.83V20z"/>
  {:else if variation === 'sharp'}
    <path d="M2 22h20V2L2 22zm18-2H6.83L20 6.83V20z"/>
  {:else if variation === 'two-tone'}
    <path d="M2 22h20V2L2 22zm18-2H6.83L20 6.83V20z"/>
  {/if}
</svg>