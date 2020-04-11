function regen() {
  const canvas = document.getElementById("canvas");

  const n_input = document.getElementById("value_n");
  const b_input = document.getElementById("value_b");
  const s_input = document.getElementById("value_s");
  const a_input = document.getElementById("value_a");
  const c_input = document.getElementById("value_c");

  const newSystem = generate(
    n_input.value,
    b_input.value,
    s_input.value,
    a_input.value,
    c_input.value
  );
  render(canvas, newSystem);
}

function onPageLoad() {
  regen();
}
