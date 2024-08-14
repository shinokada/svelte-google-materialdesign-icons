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

  export let ariaLabel = 'biotech';
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
      d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3a3 3 0 0 1 1.47-2.57c.41.59 1.06 1 1.83 1.06.7.06 1.36-.19 1.85-.62l.59 1.61.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.52-.94.34-.34-.94-1.88.68.34.94-.94.35.56 1.55c-1.17-.04-2.19.75-2.48 1.86A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2H7zm5.86-14.48 1.71 4.7-.94.34-1.71-4.7.94-.34zM10.5 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
    />
  {:else if variation === 'filled'}
    <path
      d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2H7z"
    /><path
      d="M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.59 1.62.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.53-.94.34-.34-.94-1.88.68.34.94-.94.35.56 1.54z"
    /><circle cx="10.5" cy="8" r="1.5" />
  {:else if variation === 'round'}
    <path
      d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2H7z"
    /><path
      d="M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.25.68c.19.52.76.79 1.28.6.19.52.76.79 1.28.6.52-.19.79-.76.6-1.28.52-.19.79-.76.6-1.28L14.1 3.54a.998.998 0 0 0-1.28-.6.998.998 0 0 0-1.28-.6c-.52.19-.79.76-.6 1.28-.52.19-.79.76-.6 1.28l.22.61z"
    /><circle cx="10.5" cy="8" r="1.5" />
  {:else if variation === 'sharp'}
    <path
      d="M13 19v-2h5v-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2H5v2h14v-2h-6z"
    /><path
      d="M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.59 1.62.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.53-.94.34-.34-.94-1.88.68.34.94-.94.35.56 1.54z"
    /><circle cx="10.5" cy="8" r="1.5" />
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
@prop export let ariaLabel = 'biotech';
-->
