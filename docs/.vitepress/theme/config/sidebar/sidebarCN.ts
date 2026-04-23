import { DefaultTheme } from "vitepress";

export const sidebarCN: DefaultTheme.SidebarItem[] = [
    {
        text: "计算机网络",
        items: [
            {
                text: "传输层",
                items: [
                    {
                        text: "TCP",
                        link: "/transport_layer/tcp"
                    },
                    {
                        text: "UDP",
                        link: "/transport_layer/udp"
                    }
                ]
            }
        ]
    }
];
