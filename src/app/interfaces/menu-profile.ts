import { FaProps } from "@fortawesome/angular-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface MenuProfile {
    nameItem: string;
    describe: string;
    faIcon: IconProp;
    show: boolean;
}
