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

  export let ariaLabel = 'no photography';
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
      d="M8.9 6.07 7.48 4.66 9 3h6l1.83 2H20c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16L20 17.17V7h-4.05l-1.83-2H9.88L8.9 6.07zm11.59 17.24L18.17 21H4c-1.1 0-2-.9-2-2V7c0-.59.27-1.12.68-1.49l-2-2L2.1 2.1l19.8 19.8-1.41 1.41zM9.19 12.02c-.11.31-.19.63-.19.98 0 1.66 1.34 3 3 3 .35 0 .67-.08.98-.19l-3.79-3.79zM16.17 19l-1.68-1.68c-.73.43-1.58.68-2.49.68-2.76 0-5-2.24-5-5 0-.91.25-1.76.68-2.49L4.17 7H4v12h12.17zm-1.36-7.02 2.07 2.07c.08-.34.12-.69.12-1.05 0-2.76-2.24-5-5-5-.36 0-.71.04-1.06.12l2.07 2.07c.84.3 1.5.96 1.8 1.79z"
    />
  {:else if variation === 'filled'}
    <path
      d="M10.94 8.12 7.48 4.66 9 3h6l1.83 2H20c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16l-5.1-5.1c.08-.35.12-.7.12-1.06 0-2.76-2.24-5-5-5-.36 0-.71.04-1.06.12zm9.55 15.19L18.17 21H4c-1.1 0-2-.9-2-2V7c0-.59.27-1.12.68-1.49l-2-2L2.1 2.1l19.8 19.8-1.41 1.41zm-6-5.99-1.5-1.5c-.32.1-.64.18-.99.18-1.66 0-3-1.34-3-3 0-.35.08-.67.19-.98l-1.5-1.5A4.74 4.74 0 0 0 7 13c0 2.76 2.24 5 5 5 .91 0 1.76-.25 2.49-.68z"
    />
  {:else if variation === 'round'}
    <path
      d="M10.94 8.12 7.48 4.66l.92-1.01c.38-.41.92-.65 1.48-.65h4.24c.56 0 1.1.24 1.47.65L16.83 5H20c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16l-5.1-5.1c.08-.35.12-.7.12-1.06 0-2.76-2.24-5-5-5-.36 0-.71.04-1.06.12zm8.84 14.49L18.17 21H4c-1.1 0-2-.9-2-2V7c0-.59.27-1.12.68-1.49L1.39 4.22A.996.996 0 1 1 2.8 2.81l18.38 18.38c.39.39.39 1.02 0 1.41-.38.4-1.01.4-1.4.01zm-5.29-5.29-1.5-1.5c-.32.1-.64.18-.99.18-1.66 0-3-1.34-3-3 0-.35.08-.67.19-.98l-1.5-1.5A4.74 4.74 0 0 0 7 13c0 2.76 2.24 5 5 5 .91 0 1.76-.25 2.49-.68z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M10.94 8.12 7.48 4.66 9 3h6l1.83 2H22v14.17l-5.12-5.12c.08-.34.12-.69.12-1.05 0-2.76-2.24-5-5-5-.36 0-.71.04-1.06.12zm9.55 15.19L18.17 21H2V5h.17L.69 3.51 2.1 2.1 21 21l.9.9-1.41 1.41zm-6-5.99-1.5-1.5c-.32.1-.64.18-.99.18-1.66 0-3-1.34-3-3 0-.35.08-.67.19-.98l-1.5-1.5A4.74 4.74 0 0 0 7 13c0 2.76 2.24 5 5 5 .91 0 1.76-.25 2.49-.68z"
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
@prop export let ariaLabel = 'no photography';
-->
