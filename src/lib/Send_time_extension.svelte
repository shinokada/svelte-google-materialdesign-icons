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

  export let ariaLabel = 'send time extension';
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
      d="M18 6v6.26l2 1V6c0-1.1-.9-2-2-2h-4a2.5 2.5 0 0 0-5 0H5.01c-1.1 0-2 .9-2 2v3.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.16 1.37-2.78 2.2-2.94v-2.03c-1.43.17-3.15 1.04-3.87 2.97H5v-2.13c2.17-.8 3-2.87 3-4.37 0-1.49-.83-3.56-2.99-4.37V6H11V4c0-.28.22-.5.5-.5s.5.22.5.5v2h6z"
    /><path d="M13 12v4l4 1-4 1v4l10-5z" />
  {:else if variation === 'filled'}
    <path
      d="M20 6c0-1.1-.9-2-2-2h-4a2.5 2.5 0 0 0-5 0H5.01c-1.1 0-2 .9-2 2v3.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.16 1.37-2.78 2.2-2.94v-9.3l9 4.5V6z"
    /><path d="M13 12v4l4 1-4 1v4l10-5z" />
  {:else if variation === 'round'}
    <path
      d="M20 6c0-1.1-.9-2-2-2h-4a2.5 2.5 0 0 0-5 0H5.01c-1.1 0-2 .9-2 2v3.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.16 1.37-2.78 2.2-2.94v-9.3l9 4.5V6z"
    /><path d="M13 12v4l4 1-4 1v4l10-5z" />
  {:else if variation === 'sharp'}
    <path
      d="M20 4h-6a2.5 2.5 0 0 0-5 0H3.01v5.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V21h5.8c0-2.16 1.37-2.78 2.2-2.94v-9.3l9 4.5V4z"
    /><path d="M13 12v4l4 1-4 1v4l10-5z" />
  {:else if variation === 'two-tone'}
    <path
      d="M12 6V4c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2H5.01v2.13C7.17 8.94 8 11.01 8 12.5c0 1.5-.83 3.57-3 4.37V19h2.13c.71-1.93 2.44-2.8 3.87-2.97V8.76l2.89 1.45L18 12.26V6h-6z"
      opacity=".3"
    /><path
      d="M7.13 19H5v-2.13c2.17-.8 3-2.87 3-4.37 0-1.49-.83-3.56-2.99-4.37V6H11V4c0-.28.22-.5.5-.5s.5.22.5.5v2h6v6.26l2 1V6c0-1.1-.9-2-2-2h-4a2.5 2.5 0 0 0-5 0H5.01c-1.1 0-2 .9-2 2v3.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.16 1.37-2.78 2.2-2.94v-2.03c-1.43.17-3.15 1.04-3.87 2.97z"
    /><path d="M13 12v4l4 1-4 1v4l10-5z" />
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
@prop export let ariaLabel = 'send time extension';
-->
