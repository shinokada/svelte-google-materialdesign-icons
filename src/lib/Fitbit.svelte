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

  export let ariaLabel = 'fitbit';
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
      d="M19.89 13.89c1.04 0 1.89-.85 1.89-1.89s-.85-1.89-1.89-1.89S18 10.96 18 12s.85 1.89 1.89 1.89zm-4.24-.21c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68c-.93 0-1.68.75-1.68 1.68s.75 1.68 1.68 1.68zm0-4.26c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .93.75 1.68 1.68 1.68zm0 8.51c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .92.75 1.68 1.68 1.68zm-4.24-4.46c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0-4.26c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0 8.52c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0 4.27c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0-17.06c.81 0 1.47-.66 1.47-1.47S12.22 2 11.41 2c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm-4.25 8.32c.7 0 1.26-.57 1.26-1.26s-.57-1.26-1.26-1.26a1.261 1.261 0 0 0 0 2.52zm0 4.25a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52zm0-8.49a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52zm-3.87 4.03a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1z"
    />
  {:else if variation === 'filled'}
    <path
      d="M19.89 13.89c1.04 0 1.89-.85 1.89-1.89s-.85-1.89-1.89-1.89S18 10.96 18 12s.85 1.89 1.89 1.89zm-4.24-.21c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68c-.93 0-1.68.75-1.68 1.68s.75 1.68 1.68 1.68zm0-4.26c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .93.75 1.68 1.68 1.68zm0 8.51c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .92.75 1.68 1.68 1.68zm-4.24-4.46c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0-4.26c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0 8.52c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0 4.27c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0-17.06c.81 0 1.47-.66 1.47-1.47S12.22 2 11.41 2c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm-4.25 8.32c.7 0 1.26-.57 1.26-1.26s-.57-1.26-1.26-1.26a1.261 1.261 0 0 0 0 2.52zm0 4.25a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52zm0-8.49a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52zm-3.87 4.03a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1z"
    />
  {:else if variation === 'round'}
    <path
      d="M19.89 13.89c1.04 0 1.89-.85 1.89-1.89s-.85-1.89-1.89-1.89S18 10.96 18 12s.85 1.89 1.89 1.89zm-4.24-.21c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68c-.93 0-1.68.75-1.68 1.68s.75 1.68 1.68 1.68zm0-4.26c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .93.75 1.68 1.68 1.68zm0 8.51c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .92.75 1.68 1.68 1.68zm-4.24-4.46c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0-4.26c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0 8.52c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0 4.27c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0-17.06c.81 0 1.47-.66 1.47-1.47S12.22 2 11.41 2c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm-4.25 8.32c.7 0 1.26-.57 1.26-1.26s-.57-1.26-1.26-1.26a1.261 1.261 0 0 0 0 2.52zm0 4.25a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52zm0-8.49a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52zm-3.87 4.03a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M19.89 13.89c1.04 0 1.89-.85 1.89-1.89s-.85-1.89-1.89-1.89S18 10.96 18 12s.85 1.89 1.89 1.89zm-4.24-.21c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68c-.93 0-1.68.75-1.68 1.68s.75 1.68 1.68 1.68zm0-4.26c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .93.75 1.68 1.68 1.68zm0 8.51c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .92.75 1.68 1.68 1.68zm-4.24-4.46c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0-4.26c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0 8.52c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0 4.27c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0-17.06c.81 0 1.47-.66 1.47-1.47S12.22 2 11.41 2c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm-4.25 8.32c.7 0 1.26-.57 1.26-1.26s-.57-1.26-1.26-1.26a1.261 1.261 0 0 0 0 2.52zm0 4.25a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52zm0-8.49a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52zm-3.87 4.03a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M19.89 13.89c1.04 0 1.89-.85 1.89-1.89s-.85-1.89-1.89-1.89S18 10.96 18 12s.85 1.89 1.89 1.89zm-4.24-.21c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68c-.93 0-1.68.75-1.68 1.68s.75 1.68 1.68 1.68zm0-4.26c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .93.75 1.68 1.68 1.68zm0 8.51c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .92.75 1.68 1.68 1.68zm-4.24-4.46c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0-4.26c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0 8.52c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0 4.27c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0-17.06c.81 0 1.47-.66 1.47-1.47S12.22 2 11.41 2c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm-4.25 8.32c.7 0 1.26-.57 1.26-1.26s-.57-1.26-1.26-1.26a1.261 1.261 0 0 0 0 2.52zm0 4.25a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52zm0-8.49a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52zm-3.87 4.03a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1z"
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
@prop export let ariaLabel = 'fitbit';
-->
