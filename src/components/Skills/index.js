import {
    Container,
    Wrap, WrapItem
} from "@chakra-ui/react";
import SkillCard from "./SkillCard";

export default function Index({color}) {
    return <Container>
        <Wrap>
            <WrapItem>
                <SkillCard skillPercent={60}/>
            </WrapItem>
            <WrapItem>
                <SkillCard skillPercent={60}/>
            </WrapItem>
            <WrapItem>
                <SkillCard skillPercent={60}/>
            </WrapItem>
            <WrapItem>
                <SkillCard skillPercent={60}/>
            </WrapItem>
            <WrapItem>
                <SkillCard skillPercent={60}/>
            </WrapItem>
            <WrapItem>
                <SkillCard skillPercent={60}/>
            </WrapItem>
            <WrapItem>
                <SkillCard skillPercent={60}/>
            </WrapItem>
        </Wrap>
    </Container>
}
