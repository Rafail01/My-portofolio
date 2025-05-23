import { FC } from 'hono/jsx';
import {jobs} from "../../public/static/data/jobs";

export const JobPage: FC = () => {


    return (
        <>
            <h1>Οι δουλειές μου</h1>
            <div className="list">
                <ul>
                    {jobs.map(job => (
                        <li key={job.id}>
                            <div>
                                <a
                                    href={job.link}
                                    target="_blank"
                                    style={{ color: 'white' }}
                                >
                                    {job.title}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
