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

  export let ariaLabel = 'scuba diving';
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
      d="M1 13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7.89-2.89 4.53-1.21-.78-2.9-4.53 1.21c-.8.21-1.28 1.04-1.06 1.84.22.8 1.04 1.28 1.84 1.06zM20.5 5.9 23 3l-1-1-3 3-2 4-9.48 2.87c-.82.2-1.39.89-1.5 1.68L5.24 18 2.4 21.8 4 23l3-4 1.14-3.14L14 14l5-3.5 1.5-4.6z"
    />
  {:else if variation === 'filled'}
    <path
      d="M1 13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7.89-2.89 4.53-1.21-.78-2.9-4.53 1.21c-.8.21-1.28 1.04-1.06 1.84.22.8 1.04 1.28 1.84 1.06zM20.5 5.9 23 3l-1-1-3 3-2 4-9.48 2.87c-.82.2-1.39.89-1.5 1.68L5.24 18 2.4 21.8 4 23l3-4 1.14-3.14L14 14l5-3.5 1.5-4.6z"
    />
  {:else if variation === 'round'}
    <path
      d="M1 13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7.89-2.89 3.56-.95c.53-.14.85-.69.71-1.22l-.26-.97c-.14-.53-.69-.85-1.22-.71l-3.57.95c-.8.21-1.28 1.04-1.06 1.84.22.8 1.04 1.28 1.84 1.06zm13.63-7.59a.73.73 0 0 0-1.04 0L19 5l-2 4-9.48 2.87c-.82.2-1.39.89-1.5 1.68L5.24 18 3 21c-.33.44-.24 1.07.2 1.4.44.33 1.07.24 1.4-.2L7 19l1.14-3.14 5.57-1.77c.19-.06.38-.15.54-.27l4.2-2.94c.36-.25.62-.61.75-1.02l1.3-3.96 2.06-2.38c.25-.3.23-.73-.04-1z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M1 13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7.89-2.89 4.53-1.21-.78-2.9-4.53 1.21c-.8.21-1.28 1.04-1.06 1.84.22.8 1.04 1.28 1.84 1.06zM20.5 5.9 23 3l-1-1-3 3-2 4-9.48 2.87c-.82.2-1.39.89-1.5 1.68L5.24 18 2.4 21.8 4 23l3-4 1.14-3.14L14 14l5-3.5 1.5-4.6z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M1 13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7.89-2.89 4.53-1.21-.78-2.9-4.53 1.21c-.8.21-1.28 1.04-1.06 1.84.22.8 1.04 1.28 1.84 1.06zM20.5 5.9 23 3l-1-1-3 3-2 4-9.48 2.87c-.82.2-1.39.89-1.5 1.68L5.24 18 2.4 21.8 4 23l3-4 1.14-3.14L14 14l5-3.5 1.5-4.6z"
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
@prop export let ariaLabel = 'scuba diving';
-->
