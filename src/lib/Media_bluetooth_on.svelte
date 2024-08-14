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

  export let ariaLabel = 'media bluetooth on';
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
      d="m9 3 .01 10.55c-.6-.34-1.28-.55-2-.55a4.001 4.001 0 1 0 0 8C9.23 21 11 19.21 11 17V7h4V3H9zm12 9.43L17.57 9h-.6v4.55l-2.75-2.75-.85.85L16.73 15l-3.35 3.35.85.85 2.75-2.75V21h.6L21 17.57 18.42 15 21 12.43zm-2.83-1.13 1.13 1.13-1.13 1.13V11.3zm1.13 6.27-1.13 1.13v-2.26l1.13 1.13z"
    />
  {:else if variation === 'filled'}
    <path
      d="m9 3 .01 10.55c-.6-.34-1.28-.55-2-.55a4.001 4.001 0 1 0 0 8C9.23 21 11 19.21 11 17V7h4V3H9zm12 9.43L17.57 9h-.6v4.55l-2.75-2.75-.85.85L16.73 15l-3.35 3.35.85.85 2.75-2.75V21h.6L21 17.57 18.42 15 21 12.43zm-2.83-1.13 1.13 1.13-1.13 1.13V11.3zm1.13 6.27-1.13 1.13v-2.26l1.13 1.13z"
    />
  {:else if variation === 'round'}
    <path
      d="m9 5 .01 8.55c-.6-.34-1.28-.55-2-.55a4.001 4.001 0 1 0 0 8C9.23 21 11 19.21 11 17V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2zm11.29 6.72-2.47-2.47c-.32-.31-.85-.09-.85.35v3.94l-2.33-2.33a.61.61 0 0 0-.85 0 .61.61 0 0 0 0 .85L16.73 15l-2.93 2.93a.61.61 0 0 0 0 .85c.23.23.61.23.85 0l2.33-2.33v3.94c0 .45.54.67.85.35l2.46-2.46a.996.996 0 0 0 0-1.41L18.42 15l1.87-1.86c.39-.39.39-1.03 0-1.42zm-2.12-.42 1.13 1.13-1.13 1.13V11.3zm1.13 6.27-1.13 1.13v-2.26l1.13 1.13z"
    />
  {:else if variation === 'sharp'}
    <path
      d="m9 3 .01 10.55c-.6-.34-1.28-.55-2-.55a4.001 4.001 0 1 0 0 8C9.23 21 11 19.21 11 17V7h4V3H9zm12 9.43L17.57 9h-.6v4.55l-2.75-2.75-.85.85L16.73 15l-3.35 3.35.85.85 2.75-2.75V21h.6L21 17.57 18.42 15 21 12.43zm-2.83-1.13 1.13 1.13-1.13 1.13V11.3zm1.13 6.27-1.13 1.13v-2.26l1.13 1.13z"
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
@prop export let ariaLabel = 'media bluetooth on';
-->
