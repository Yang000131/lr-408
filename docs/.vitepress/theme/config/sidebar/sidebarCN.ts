import { DefaultTheme } from "vitepress";

export const sidebarCN: DefaultTheme.SidebarItem[] = [
    {
        text: "计算机网络",
        items: [
            {
                text: "网络层",
                items: [
                    {
                        text: "IP",
                        link: "/network_layer/ip"
                    }
                ]
            },
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
            },
            {
                text: "应用层",
                items: [
                    {
                        text: "HTTP",
                        link: "/application_layer/http"
                    }
                ]
            }
        ]
    }
];
