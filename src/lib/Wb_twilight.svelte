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

  export let ariaLabel = 'wb twilight';
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
      d="m16.955 8.662 2.12-2.122 1.416 1.414-2.121 2.122zM2 18h20v2H2zm9-14h2v3h-2zM3.543 7.925 4.957 6.51l2.121 2.12-1.414 1.415zM5 16h14c0-3.87-3.13-7-7-7s-7 3.13-7 7z"
    />
  {:else if variation === 'filled'}
    <path
      d="m16.955 8.662 2.12-2.122 1.416 1.414-2.121 2.122zM2 18h20v2H2zm9-14h2v3h-2zM3.543 7.925 4.957 6.51l2.121 2.12-1.414 1.415zM5 16h14c0-3.87-3.13-7-7-7s-7 3.13-7 7z"
    />
  {:else if variation === 'round'}
    <path
      d="m19.07 9.37.71-.71a.996.996 0 1 0-1.41-1.41l-.71.71a.996.996 0 1 0 1.41 1.41zM21 18H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM12 7c.56 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1zM4.96 9.34a.996.996 0 1 0 1.41-1.41l-.71-.71a.996.996 0 1 0-1.41 1.41l.71.71zM19 16c0-3.87-3.13-7-7-7s-7 3.13-7 7h14z"
    />
  {:else if variation === 'sharp'}
    <path
      d="m16.955 8.662 2.12-2.122 1.416 1.414-2.121 2.122zM2 18h20v2H2zm9-14h2v3h-2zM3.543 7.925 4.957 6.51l2.121 2.12-1.414 1.415zM5 16h14c0-3.87-3.13-7-7-7s-7 3.13-7 7z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="m16.955 8.662 2.12-2.122 1.416 1.414-2.121 2.122zM2 18h20v2H2zm9-14h2v3h-2zM3.543 7.925 4.957 6.51l2.121 2.12-1.414 1.415zM5 16h14c0-3.87-3.13-7-7-7s-7 3.13-7 7z"
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
@prop export let ariaLabel = 'wb twilight';
-->
