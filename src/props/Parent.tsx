import { ChildAsFc }  from   './Child'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const  Parent = () => {
return <ChildAsFc color ="blue" onClick={() => console.log('tecla acionada')}>
    testete
    </ChildAsFc>
};