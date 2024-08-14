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

  export let ariaLabel = 'shuffle on';
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
      d="M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM5.41 4l5.18 5.17-1.41 1.42L4 5.42 5.41 4zM20 20h-6v-2h2.61l-3.2-3.2 1.42-1.42 3.13 3.13.04.04V14h2v6zm0-10h-2V7.42L5.41 20 4 18.59 16.58 6H14V4h6v6z"
    />
  {:else if variation === 'filled'}
    <path
      fill-rule="evenodd"
      d="M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"
    />
  {:else if variation === 'round'}
    <path
      d="M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM4.3 4.7a.996.996 0 0 1 1.41 0l4.47 4.47-1.42 1.4L4.3 6.11a.996.996 0 0 1 0-1.41zm15.29 14.8c0 .28-.22.5-.5.5H15.3a.5.5 0 0 1-.36-.85l1.2-1.2-3.13-3.13 1.41-1.41 3.13 3.14 1.19-1.19c.31-.32.85-.1.85.35v3.79zm0-11.21a.5.5 0 0 1-.85.36l-1.19-1.19L5.7 19.29a.996.996 0 1 1-1.41-1.41L16.13 6.04l-1.19-1.19A.5.5 0 0 1 15.3 4h3.79c.28 0 .5.22.5.5v3.79z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M1 1v22h22V1H1zm4.41 3 5.18 5.17-1.42 1.41L4 5.41 5.41 4zM20 20h-5.5l2.05-2.05-3.13-3.13 1.41-1.41 3.13 3.13L20 14.5V20zm0-10.5-2.04-2.04L5.41 20 4 18.59 16.54 6.04 14.5 4H20v5.5z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM5.41 4l5.18 5.17-1.42 1.41L4 5.41 5.41 4zM20 20h-5.5l2.05-2.05-3.13-3.13 1.41-1.41 3.13 3.13L20 14.5V20zm0-10.5-2.04-2.04L5.41 20 4 18.59 16.54 6.04 14.5 4H20v5.5z"
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
@prop export let ariaLabel = 'shuffle on';
-->
