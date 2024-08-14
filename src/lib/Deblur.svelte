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

  export let ariaLabel = 'deblur';
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
    <circle cx="6" cy="14" r="1" /><circle cx="6" cy="18" r="1" /><circle
      cx="6"
      cy="10"
      r="1"
    /><circle cx="3" cy="10" r=".5" /><circle cx="6" cy="6" r="1" /><circle
      cx="3"
      cy="14"
      r=".5"
    /><circle cx="10" cy="21" r=".5" /><circle cx="10" cy="3" r=".5" /><circle
      cx="10"
      cy="6"
      r="1"
    /><circle cx="10" cy="14" r="1.5" /><circle cx="10" cy="10" r="1.5" /><circle
      cx="10"
      cy="18"
      r="1"
    /><path d="M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z" />
  {:else if variation === 'filled'}
    <path d="M12 3v18a9 9 0 0 0 0-18z" /><circle cx="6" cy="14" r="1" /><circle
      cx="6"
      cy="18"
      r="1"
    /><circle cx="6" cy="10" r="1" /><circle cx="3" cy="10" r=".5" /><circle
      cx="6"
      cy="6"
      r="1"
    /><circle cx="3" cy="14" r=".5" /><circle cx="10" cy="21" r=".5" /><circle
      cx="10"
      cy="3"
      r=".5"
    /><circle cx="10" cy="6" r="1" /><circle cx="10" cy="14" r="1.5" /><circle
      cx="10"
      cy="10"
      r="1.5"
    /><circle cx="10" cy="18" r="1" />
  {:else if variation === 'round'}
    <path d="M12 3v18a9 9 0 0 0 0-18z" /><circle cx="6" cy="14" r="1" /><circle
      cx="6"
      cy="18"
      r="1"
    /><circle cx="6" cy="10" r="1" /><circle cx="3" cy="10" r=".5" /><circle
      cx="6"
      cy="6"
      r="1"
    /><circle cx="3" cy="14" r=".5" /><circle cx="10" cy="21" r=".5" /><circle
      cx="10"
      cy="3"
      r=".5"
    /><circle cx="10" cy="6" r="1" /><circle cx="10" cy="14" r="1.5" /><circle
      cx="10"
      cy="10"
      r="1.5"
    /><circle cx="10" cy="18" r="1" />
  {:else if variation === 'sharp'}
    <path d="M12 3v18a9 9 0 0 0 0-18z" /><circle cx="6" cy="14" r="1" /><circle
      cx="6"
      cy="18"
      r="1"
    /><circle cx="6" cy="10" r="1" /><circle cx="3" cy="10" r=".5" /><circle
      cx="6"
      cy="6"
      r="1"
    /><circle cx="3" cy="14" r=".5" /><circle cx="10" cy="21" r=".5" /><circle
      cx="10"
      cy="3"
      r=".5"
    /><circle cx="10" cy="6" r="1" /><circle cx="10" cy="14" r="1.5" /><circle
      cx="10"
      cy="10"
      r="1.5"
    /><circle cx="10" cy="18" r="1" />
  {:else if variation === 'two-tone'}
    <circle cx="6" cy="14" r="1" /><circle cx="6" cy="18" r="1" /><circle
      cx="6"
      cy="10"
      r="1"
    /><circle cx="3" cy="10" r=".5" /><circle cx="6" cy="6" r="1" /><circle
      cx="3"
      cy="14"
      r=".5"
    /><circle cx="10" cy="21" r=".5" /><circle cx="10" cy="3" r=".5" /><circle
      cx="10"
      cy="6"
      r="1"
    /><circle cx="10" cy="14" r="1.5" /><circle cx="10" cy="10" r="1.5" /><circle
      cx="10"
      cy="18"
      r="1"
    /><path d="M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z" /><path
      d="M12 5v14c3.86 0 7-3.14 7-7s-3.14-7-7-7z"
      opacity=".3"
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
@prop export let ariaLabel = 'deblur';
-->
