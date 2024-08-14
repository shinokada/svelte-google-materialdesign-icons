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

export let ariaLabel="h mobiledata";
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
    <path d="M15 11H9V7H7v10h2v-4h6v4h2V7h-2v4z"/>
  {:else if variation === 'filled'}
    <path d="M15 11H9V7H7v10h2v-4h6v4h2V7h-2v4z"/>
  {:else if variation === 'round'}
    <path d="M15 11H9V8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1v-3h6v3c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v3z"/>
  {:else if variation === 'sharp'}
    <path d="M15 11H9V7H7v10h2v-4h6v4h2V7h-2v4z"/>
  {:else if variation === 'two-tone'}
    <path d="M15 11H9V7H7v10h2v-4h6v4h2V7h-2v4z"/>
  {/if}
</svg>