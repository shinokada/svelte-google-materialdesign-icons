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

  export let ariaLabel = 'diversity 3';
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
      d="M6.32 13.01c.96.02 1.85.5 2.45 1.34A3.961 3.961 0 0 0 12 16c1.29 0 2.5-.62 3.23-1.66.6-.84 1.49-1.32 2.45-1.34-.72-1.22-3.6-2-5.68-2-2.07 0-4.96.78-5.68 2.01zM4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3 1.34 3 3 3zm16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"
    /><path
      d="M21 14h-3.27c-.77 0-1.35.45-1.68.92-.04.06-1.36 2.08-4.05 2.08-1.43 0-3.03-.64-4.05-2.08-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v4h7v-2.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V20h7v-4c0-1.1-.9-2-2-2z"
    />
  {:else if variation === 'filled'}
    <path
      d="M6.32 13.01c.96.02 1.85.5 2.45 1.34A3.961 3.961 0 0 0 12 16c1.29 0 2.5-.62 3.23-1.66.6-.84 1.49-1.32 2.45-1.34-.72-1.22-3.6-2-5.68-2-2.07 0-4.96.78-5.68 2.01zM4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3 1.34 3 3 3zm16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"
    /><path
      d="M21 14h-3.27c-.77 0-1.35.45-1.68.92-.04.06-1.36 2.08-4.05 2.08-1.43 0-3.03-.64-4.05-2.08-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v4h7v-2.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V20h7v-4c0-1.1-.9-2-2-2z"
    />
  {:else if variation === 'round'}
    <path
      d="M6.32 13.01c.96.02 1.85.5 2.45 1.34A3.961 3.961 0 0 0 12 16c1.29 0 2.5-.62 3.23-1.66.6-.84 1.49-1.32 2.45-1.34-.72-1.22-3.6-2-5.68-2-2.07 0-4.96.78-5.68 2.01zM4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3 1.34 3 3 3zm16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"
    /><path
      d="M21 14h-3.27c-.77 0-1.35.45-1.68.92-.04.06-1.36 2.08-4.05 2.08-1.43 0-3.03-.64-4.05-2.08-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-1.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V19c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-3c0-1.1-.9-2-2-2z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M6.32 13.01c.96.02 1.85.5 2.45 1.34A3.961 3.961 0 0 0 12 16c1.29 0 2.5-.62 3.23-1.66.6-.84 1.49-1.32 2.45-1.34-.72-1.22-3.6-2-5.68-2-2.07 0-4.96.78-5.68 2.01zM4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3 1.34 3 3 3zm16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"
    /><path
      d="M21 14h-3.27c-.77 0-1.35.45-1.68.92-.04.06-1.36 2.08-4.05 2.08-1.43 0-3.03-.64-4.05-2.08-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v4h7v-2.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V20h7v-4c0-1.1-.9-2-2-2z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M6.32 13.01c.96.02 1.85.5 2.45 1.34A3.961 3.961 0 0 0 12 16c1.29 0 2.5-.62 3.23-1.66.6-.84 1.49-1.32 2.45-1.34-.72-1.22-3.6-2-5.68-2-2.07 0-4.96.78-5.68 2.01zM4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3 1.34 3 3 3zm16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"
    /><path
      d="M21 14h-3.27c-.77 0-1.35.45-1.68.92-.04.06-1.36 2.08-4.05 2.08-1.43 0-3.03-.64-4.05-2.08-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v4h7v-2.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V20h7v-4c0-1.1-.9-2-2-2z"
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
@prop export let ariaLabel = 'diversity 3';
-->
