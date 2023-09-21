<script>
  import { setContext } from 'svelte';
  import { Zoom_in, Work_off } from '$lib';
  const iconCtx = {
    size: '50', // Icon size in pixels
    color: '#00ff00', // Icon color in hexadecimal or CSS color name
    variation: 'filled'
  };
  setContext('iconCtx', iconCtx);
</script>

<Zoom_in />
<Work_off />
