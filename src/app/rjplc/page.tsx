'use client';

import PageContainer from '@/lib/pageContainer';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import init, { perform_steps, Output } from 'rjplc-wasm';

const tabs = [
	{
		name: 'lex',
		idx: 0,
	},
	{
		name: 'parse',
		idx: 1,
	},
];

export default function RJPLCPage() {
	const [loaded, setLoaded] = useState(false);
	const [input, setInput] = useState('');
	const [compilerOutput, setCompilerOutput] = useState<Output>();
	const [currentTab, setCurrentTab] = useState<number>(1);

	useEffect(() => {
		init().then(() => {
			setLoaded(true);
		});
	}, []);

	useEffect(() => {
		if (loaded && input.length > 0) {
			setCompilerOutput(perform_steps(input));
		}
	}, [input, loaded]);

	let content;

	if (compilerOutput === undefined) {
		content = <span className="text-sm font-semibold text-white">Enter some text on the left to get started.</span>;
	} else if (compilerOutput.lex_output.length > 0 && currentTab === 0) {
		content = (
			<div className="flex flex-col gap-y-2">
				{compilerOutput.lex_output.split('\n').map((token, i) => (
					<span
						key={i}
						className="text-sm font-semibold text-white"
					>
						{token}
					</span>
				))}
			</div>
		);
	} else if (compilerOutput.parse_output.length > 0 && currentTab === 1) {
		content = (
			<div className="flex flex-col gap-y-2">
				{compilerOutput.parse_output.split('\n').map((token, i) => (
					<span
						key={i}
						className="text-sm font-semibold text-white"
					>
						{token}
					</span>
				))}
			</div>
		);
	}

	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto';
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	}, [input]);

	return (
		<PageContainer
			title="Rust JPL Compiler"
			className="flex flex-col gap-y-2"
			description="Badabing, badaboom."
		>
			<div>
				<nav
					aria-label="Tabs"
					className="isolate flex divide-x divide-neutral-950 rounded-lg shadow"
				>
					{tabs.map((tab, tabIdx) => (
						<button
							key={tab.name}
							aria-current={tab.idx === currentTab ? 'page' : undefined}
							className={cn(
								tab.idx === currentTab ? 'text-active' : 'text-activatable hover:active',
								tabIdx === 0 ? 'rounded-l-lg' : '',
								tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
								'group relative min-w-0 flex-1 cursor-pointer overflow-hidden bg-neutral-900 px-4 py-4 text-center text-sm font-medium transition-colors hover:bg-neutral-900/80 focus:z-10'
							)}
							onClick={() => setCurrentTab(tab.idx)}
						>
							<span>{tab.name}</span>
							<span
								aria-hidden="true"
								className={cn(
									tab.idx === currentTab ? 'bg-indigo-500' : 'bg-transparent',
									'absolute inset-x-0 bottom-0 h-0.5'
								)}
							/>
						</button>
					))}
				</nav>
			</div>
			<div className="flex flex-col gap-4 md:grid md:grid-cols-2">
				<div>
					<label
						htmlFor="comment"
						className="text-activatable block text-sm/6 font-medium"
					>
						Add your JPL source
					</label>
					<div className="mt-2">
						<textarea
							ref={textareaRef}
							id="comment"
							name="comment"
							rows={4}
							className="outline-activatable block max-h-[500px] w-full rounded-md bg-transparent px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 transition-colors placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
							onChange={(e) => setInput(e.target.value)}
							value={input}
							spellCheck={false}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-y-4">
					<label className="text-activatable block text-sm/6 font-medium">Compiler output</label>
					<div className="flex gap-y-1">{content}</div>
				</div>
			</div>
		</PageContainer>
	);
}
