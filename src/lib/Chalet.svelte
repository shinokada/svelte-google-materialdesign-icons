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

  export let ariaLabel = 'chalet';
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
      d="M17.5 15 10 7.5 2.5 15l1.41 1.41L5 15.33V20h10v-4.67l1.09 1.09L17.5 15zM13 18h-2v-3H9v3H7v-4.67l3-3 3 3V18zm9-10.5h-1.19l.75.75-.71.71-1.46-1.46h-.89v.89l1.45 1.45-.71.71-.74-.74V11h-1V9.81l-.75.75-.71-.71 1.45-1.45v-.9h-.89l-1.45 1.45-.71-.71.75-.75H14v-1h1.19l-.75-.75.71-.71 1.45 1.45h.89v-.87l-1.45-1.45.71-.71.75.75V3h1v1.19l.75-.75.71.71-1.46 1.46v.89h.89l1.45-1.45.71.71-.74.74H22v1z"
    />
  {:else if variation === 'filled'}
    <path
      d="m10 7.5 7.5 7.5-1.41 1.41L15 15.33V20h-4v-5H9v5H5v-4.67l-1.09 1.09L2.5 15 10 7.5zm12-1h-1.19l.75-.75-.71-.71-1.46 1.46h-.89v-.89l1.45-1.45-.71-.71-.74.74V3h-1v1.19l-.75-.75-.71.71 1.45 1.45v.9h-.89l-1.45-1.45-.71.71.75.75H14v1h1.19l-.75.75.71.71 1.45-1.45h.89v.89l-1.45 1.45.71.71.75-.75V11h1V9.81l.75.75.71-.71-1.46-1.46V7.5h.89l1.45 1.45.71-.71-.74-.74H22v-1z"
    />
  {:else if variation === 'round'}
    <path
      d="M10 15c-.55 0-1 .45-1 1v4H6c-.55 0-1-.45-1-1v-3.67l-.38.38a.996.996 0 1 1-1.41-1.41L9.3 8.21a.996.996 0 0 1 1.41 0l6.09 6.09a.996.996 0 1 1-1.41 1.41l-.39-.38V19c0 .55-.45 1-1 1h-3v-4c0-.55-.45-1-1-1zm7.5-7.5v.89l-1.08 1.08c-.18.18-.21.48-.05.69.19.23.53.24.74.04l.39-.39v.69c0 .28.22.5.5.5s.5-.22.5-.5v-.69l.39.39c.21.21.55.19.74-.04.17-.2.14-.5-.05-.69L18.5 8.39V7.5h.89l1.08 1.08c.18.18.48.21.69.05.23-.19.24-.53.04-.74l-.39-.39h.69c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-.69l.39-.39c.21-.21.19-.55-.04-.74-.2-.17-.5-.14-.69.05L19.39 6.5h-.89v-.89l1.08-1.08c.18-.18.21-.48.05-.69a.506.506 0 0 0-.74-.04l-.39.39V3.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.69l-.39-.39a.498.498 0 0 0-.74.04c-.17.2-.14.5.05.69l1.08 1.08v.89h-.89l-1.08-1.08a.531.531 0 0 0-.69-.05c-.23.19-.24.53-.04.74l.39.39h-.69c-.28 0-.5.22-.5.5s.22.5.5.5h.69l-.39.39c-.21.21-.19.55.04.74.2.17.5.14.69-.05l1.08-1.08h.89z"
    />
  {:else if variation === 'sharp'}
    <path
      d="m10 7.5 7.5 7.5-1.41 1.41L15 15.33V20h-4v-5H9v5H5v-4.67l-1.09 1.09L2.5 15 10 7.5zm12-1h-1.19l.75-.75-.71-.71-1.46 1.46h-.89v-.89l1.45-1.45-.71-.71-.74.74V3h-1v1.19l-.75-.75-.71.71 1.45 1.45v.9h-.89l-1.45-1.45-.71.71.75.75H14v1h1.19l-.75.75.71.71 1.45-1.45h.89v.89l-1.45 1.45.71.71.75-.75V11h1V9.81l.75.75.71-.71-1.46-1.46V7.5h.89l1.45 1.45.71-.71-.74-.74H22v-1z"
    />
  {:else if variation === 'two-tone'}
    <path d="M13 18h-2v-3H9v3H7v-4.67l3-3 3 3z" opacity=".3" /><path
      d="M17.5 15 10 7.5 2.5 15l1.41 1.41L5 15.33V20h10v-4.67l1.09 1.09L17.5 15zM13 18h-2v-3H9v3H7v-4.67l3-3 3 3V18zm9-10.5h-1.19l.75.75-.71.71-1.46-1.46h-.89v.89l1.45 1.45-.71.71-.74-.74V11h-1V9.81l-.75.75-.71-.71 1.45-1.45v-.9h-.89l-1.45 1.45-.71-.71.75-.75H14v-1h1.19l-.75-.75.71-.71 1.45 1.45h.89v-.87l-1.45-1.45.71-.71.75.75V3h1v1.19l.75-.75.71.71-1.46 1.46v.89h.89l1.45-1.45.71.71-.74.74H22v1z"
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
@prop export let ariaLabel = 'chalet';
-->
