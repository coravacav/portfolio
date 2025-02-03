'use client';

import PageContainer from '@/lib/pageContainer';
import { useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import init, { perform_steps, Output } from 'rjplc-wasm';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

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
			let modified;
			if (!input.endsWith('\n')) {
				modified = input + '\n';
			} else {
				modified = input;
			}
			setCompilerOutput(perform_steps(modified));
		} else {
			setCompilerOutput(undefined);
		}
	}, [input, loaded]);

	const validArray = [compilerOutput?.lex_success || false, compilerOutput?.parse_success || false];

	const content = useMemo(() => {
		if (compilerOutput === undefined) {
			return <div className="text-sm font-semibold text-white">Enter some text on the left to get started.</div>;
		} else if (compilerOutput?.lex_output.length > 0 && currentTab === 0) {
			return (
				<Editor
					height="500px"
					defaultLanguage="javascript"
					value={compilerOutput.lex_output}
					theme="vs-dark"
					onMount={(editor, monaco) => {
						editor.updateOptions({ wordWrap: 'on' });
						monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
							noSemanticValidation: true,
							noSyntaxValidation: true,
						});
					}}
				/>
			);
		} else if (compilerOutput?.parse_output.length > 0 && currentTab === 1) {
			return (
				<Editor
					height="500px"
					defaultLanguage="clojure"
					value={compilerOutput.parse_output}
					theme="vs-dark"
					onMount={(editor) => {
						editor.updateOptions({ wordWrap: 'on' });
					}}
				/>
			);
		} else {
			return <div className="text-sm font-semibold text-white">No output</div>;
		}
	}, [compilerOutput, currentTab]);

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
			description="Currently up to date with hw5"
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
							{compilerOutput === undefined ? null : validArray[tab.idx] ? (
								<span
									aria-hidden="true"
									className={'absolute inset-x-[10%] top-0 h-0.25 bg-green-400'}
								/>
							) : (
								<span
									aria-hidden="true"
									className={'absolute inset-x-[10%] top-0 h-0.25 bg-red-400'}
								/>
							)}
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
			<div className="flex flex-col gap-x-4 md:grid md:grid-cols-2">
				<div className="flex flex-col gap-y-2">
					<span className="flex items-center justify-between">
						<label
							htmlFor="comment"
							className="text-activatable block text-sm/6 font-medium"
						>
							Add your JPL source
						</label>
						{/* add a file input that reads the contents and sets the input state */}
						<input
							type="file"
							id="file"
							className="hidden"
							onChange={async (e) => {
								let text = await e.target.files[0]?.text();
								if (text) {
									setInput(text);
								}
							}}
						/>
						<label
							htmlFor="file"
							className="border-activatable hover:border-active ml-4 w-min cursor-pointer rounded-md border-2 border-dashed bg-transparent px-2 text-sm text-nowrap text-white transition-colors"
						>
							Upload a file
						</label>
					</span>
					<div>
						<Editor
							height="500px"
							defaultLanguage="javascript"
							value={input}
							theme="vs-dark"
							onChange={(value) => setInput(value)}
							onMount={(editor, monaco) => {
								editor.updateOptions({ wordWrap: 'on' });
								monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
									noSemanticValidation: true,
									noSyntaxValidation: true,
								});
							}}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-y-2">
					<label className="text-activatable block text-sm/6 font-medium">Compiler output</label>
					<div className="flex max-h-[500px] gap-y-1 overflow-y-auto">{content}</div>
				</div>
			</div>
		</PageContainer>
	);
}
