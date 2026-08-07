import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

export default function GroundwaterChart({ records }) {
    console.log(records);
    if (!records || records.length === 0) return null;

    const data = records.map((item) => ({
        year: item.year,
        pre: item.pre_monsoon_level_mbgl,
        post: item.post_monsoon_level_mbgl,
    }));

    return (
        <div className="mt-5 bg-[#182133] rounded-2xl p-5">
            <h3 className="text-white font-semibold mb-4">
                Groundwater Trend
            </h3>

            <div className="w-full h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid stroke="#2b3446" />

                        <XAxis
                            dataKey="year"
                            stroke="#94a3b8"
                        />

                        <YAxis
                            stroke="#94a3b8"
                            domain={["dataMin - 1", "dataMax + 1"]}
                        />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="pre"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            name="Pre Monsoon"
                        />

                        <Line
                            type="monotone"
                            dataKey="post"
                            stroke="#22c55e"
                            strokeWidth={3}
                            name="Post Monsoon"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}