{ pkgs }: with pkgs; {
    deps = [
        yarn
        esbuild
        nodejs-16_x
    ];
}