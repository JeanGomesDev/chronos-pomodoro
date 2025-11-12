import { useEffect } from "react";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHTML";
import { Heading } from "../../components/Heading";
import { RouterLink } from "../../components/RouterLink";
import MainTemplate from "../../templates/MainTemplate";

export function NotFound() {
    useEffect(() => {
        document.title = "404 - Page Not Found";
    }, []);

    return (
        <MainTemplate>
            <Container>
                <GenericHtml>
                    <Heading>404 - Page Not Found 🚀</Heading>
                    <p>
                        Oops! It seems the page you’re trying to reach doesn’t exist.
                        Maybe it’s on vacation, exploring the universe, or got lost somewhere
                        between two black holes. 🌌
                    </p>
                    <p>
                        But don’t worry, you’re not lost in space (yet). You can safely return to the{" "}
                        <RouterLink href='/'>homepage</RouterLink> or{" "}
                        <RouterLink href='/history'>your history</RouterLink> — or just stay here and pretend
                        you’ve discovered a secret page that only the coolest explorers can access. 🧭✨
                    </p>
                    <p>
                        If you believe this page should exist (or if you want to chat about
                        time travel and wormholes), feel free to get in touch.
                        Otherwise, use the menu to return to the real world.
                    </p>
                    <p>
                        Meanwhile, here’s a thought:
                        “If a page doesn’t exist on the internet, did it ever really exist?” 🤔💭
                    </p>
                </GenericHtml>
            </Container>
        </MainTemplate>
    );
}