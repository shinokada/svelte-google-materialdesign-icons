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

  export let ariaLabel = 'energy savings leaf';
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
      d="M12 3c-4.8 0-9 3.86-9 9 0 2.12.74 4.07 1.97 5.61L3 19.59 4.41 21l1.97-1.97A9.012 9.012 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V3h-9zm7 9c0 1.87-.73 3.63-2.05 4.95A6.96 6.96 0 0 1 12 19c-3.86 0-7-3.14-7-7 0-1.9.74-3.68 2.1-4.99A6.94 6.94 0 0 1 12 5h7v7z"
    /><path
      d="m8.46 12.63 4.05.4-2.44 3.33c-.11.16-.1.38.04.52.15.15.4.16.56.01l5.16-4.63c.33-.3.15-.85-.3-.89l-4.05-.4 2.44-3.33c.11-.16.1-.38-.04-.52a.405.405 0 0 0-.56-.01l-5.16 4.63c-.32.3-.14.85.3.89z"
    />
  {:else if variation === 'filled'}
    <path
      d="M12 3c-4.8 0-9 3.86-9 9 0 2.12.74 4.07 1.97 5.61L3 19.59 4.41 21l1.97-1.97A9.012 9.012 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V3h-9zm3.83 9.26-5.16 4.63c-.16.15-.41.14-.56-.01a.397.397 0 0 1-.04-.52l2.44-3.33-4.05-.4a.514.514 0 0 1-.3-.89l5.16-4.63c.16-.15.41-.14.56.01.14.14.16.36.04.52l-2.44 3.33 4.05.4c.45.04.63.59.3.89z"
    />
  {:else if variation === 'round'}
    <path
      d="M12 3c-4.8 0-9 3.86-9 9 0 2.12.74 4.07 1.97 5.61l-1.68 1.68A.996.996 0 1 0 4.7 20.7l1.68-1.68A8.962 8.962 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V5c0-1.1-.9-2-2-2h-7zm3.83 9.26-5.16 4.63c-.16.15-.41.14-.56-.01a.397.397 0 0 1-.04-.52l2.44-3.33-4.05-.4a.514.514 0 0 1-.3-.89l5.16-4.63c.16-.15.41-.14.56.01.14.14.16.36.04.52l-2.44 3.33 4.05.4c.45.04.63.59.3.89z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M12 3c-4.8 0-9 3.86-9 9 0 2.12.74 4.07 1.97 5.61L3 19.59 4.41 21l1.97-1.97A9.012 9.012 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V3h-9zm-1.5 14-.5-.5 2.5-3.5-5-.5 6-5.5.5.5-2.5 3.5 5 .5-6 5.5z"
    />
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
@prop export let ariaLabel = 'energy savings leaf';
-->
