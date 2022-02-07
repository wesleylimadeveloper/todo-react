import { useState } from 'react';
import { Container } from './styles';

export const ListItem = ({ item }) => {
    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.name}</label>
        </Container>
    );
}