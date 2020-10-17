import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const Vuerollup: { install: InstallFunction };
export default Vuerollup;

export const VuerollupSample: VueConstructor<Vue>;
