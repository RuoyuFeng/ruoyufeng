'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';

interface AboutProps {
    content: string;
    title?: string;
    compact?: boolean;
}

export default function About({ content, title = 'About', compact = false }: AboutProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>
            <div className={cn(
                "text-neutral-700 dark:text-neutral-600",
                compact ? "leading-normal" : "leading-relaxed"
            )}>
                <ReactMarkdown
                    components={{
                        h1: ({ children }) => <h1 className="text-3xl font-serif font-bold text-primary mt-8 mb-4">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">{children}</h2>,
                        h3: ({ children }) => (
                            <h3 className={cn(
                                "font-semibold text-primary",
                                compact ? "text-xl mt-4 mb-1" : "text-xl mt-6 mb-3"
                            )}>
                                {children}
                            </h3>
                        ),
                        p: ({ children }) => (
                            <p className={cn(
                                "last:mb-0",
                                compact ? "mb-1.5" : "mb-4"
                            )}>
                                {children}
                            </p>
                        ),
                        ul: ({ children }) => <ul className={cn("list-disc list-inside ml-4", compact ? "mb-2 space-y-0.5" : "mb-4 space-y-1")}>{children}</ul>,
                        ol: ({ children }) => <ol className={cn("list-decimal list-inside ml-4", compact ? "mb-2 space-y-0.5" : "mb-4 space-y-1")}>{children}</ol>,
                        li: ({ children }) => <li className="mb-1">{children}</li>,
                        a: ({ ...props }) => (
                            <a
                                {...props}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent font-medium transition-all duration-200 rounded hover:bg-accent/10 hover:shadow-sm"
                            />
                        ),
                        blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-accent/50 pl-4 italic my-4 text-neutral-600 dark:text-neutral-500">
                                {children}
                            </blockquote>
                        ),
                        strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
                        em: ({ children }) => (
                            <em className={cn(
                                "italic text-neutral-600 dark:text-neutral-500",
                                compact && "text-[0.95rem]"
                            )}>
                                {children}
                            </em>
                        ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </motion.section>
    );
}
