const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
const ps = 40;

function run_program() {

    const code = javascript.javascriptGenerator.workspaceToCode(workspace);
    // document.getElementById("output").value = code;
    save();

    reset_canvas();
    draw_grid();
    eval(code);
    draw_overlay();
}

function save() {
    // Serialize the state.
    const state = Blockly.serialization.workspaces.save(workspace);
    // Then you save the state, e.g. to local storage.
    localStorage.setItem('workspace-state', JSON.stringify(state));
}

function reset_canvas() {
    ctx.clearRect(0, 0, c.width, c.height);
    draw_grid();
}
function draw_overlay() {
    if (!document.getElementById("linear-func").checked) {return}

    let a = document.getElementById("linear-func-a").value;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(c.width, c.width*a);
    ctx.stroke();
}
function draw_grid(){
    if (!document.getElementById("grid").checked) {return}
    ctx.beginPath();
    for (var x = 0; x <= c.width; x += ps) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, c.height);
    }

    for (var x = 0; x <= c.height; x += ps) {
        ctx.moveTo(0, x);
        ctx.lineTo(c.width, x);
    }
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 6;
    ctx.stroke();
}

function setPixel(x, y) {
    x=Math.floor(x);
    y=Math.floor(y);
    //ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.fillRect(ps*x, ps*y, ps, ps);
    ctx.stroke();
}

function setColor(color) {
    ctx.fillStyle = color;
    console.log(color);
}