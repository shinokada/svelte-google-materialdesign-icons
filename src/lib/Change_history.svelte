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

  export let ariaLabel = 'change history';
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
    <path d="M12 7.77 18.39 18H5.61L12 7.77M12 4 2 20h20L12 4z" />
  {:else if variation === 'filled'}
    <path d="M12 7.77 18.39 18H5.61L12 7.77M12 4 2 20h20L12 4z" />
  {:else if variation === 'round'}
    <path
      d="M12 7.77 18.39 18H5.61L12 7.77m-.85-2.41-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4a1 1 0 0 0 .85-1.53l-8.2-13.11a1 1 0 0 0-1.7 0z"
    />
  {:else if variation === 'sharp'}
    <path d="M12 7.77 18.39 18H5.61L12 7.77M12 4 2 20h20L12 4z" />
  {:else if variation === 'two-tone'}
    replace_svg_two
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
@prop export let ariaLabel = 'change history';
-->
