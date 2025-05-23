import { FC } from 'hono/jsx';

export const JobPage: FC = () => {


    return (
        <>
            <h1>Οι δουλιές μου</h1>
            <div className="list">
                <ul>
                    <li>
                        <div>
                            <a href="https://www.leukipos.gr/" target="_blank"  style={{color:'white'}}
                            >Λεύκιππος</a>
                        </div>
                    </li>
                    <ul>
                        <li>
                            <div>
                                <a href="https://estia.hua.gr/browse/28586" target="_blank"
                                   style={{color:'white'}}> Η πτυχιακή μου</a>
                            </div>
                        </li>
                    </ul>

                </ul>
            </div>

        </>
    );
};
